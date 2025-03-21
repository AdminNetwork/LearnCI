
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { messages, apiKey, level, className, subject } = await req.json()

    if (!apiKey) {
      throw new Error('API key is required')
    }

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }))

    // Add the additional context to the system message if there's one
    const systemMessage = anthropicMessages.find(msg => msg.role === 'system');
    if (systemMessage) {
      const additionalContext = `
          Lorsqu'un utilisateur pose une question, il est important de vérifier d'abord si elle correspond bien au niveau scolaire ivoirien ${level || ''} (classe ${className || ''}) et à la matière concernée ${subject || ''}. La réponse doit être donnée dans ce contexte précis.

          Si la question posée ne correspond pas à la matière sélectionnée, par exemple si l'utilisateur a choisi Mathématiques mais pose une question d'Histoire-Géographie, il faut l'en avertir et lui préciser que nous sommes dans la section Mathématiques. De même, si la question est trop avancée ou trop simple pour le niveau indiqué, il convient de lui signaler poliment et de lui demander s'il souhaite tout de même recevoir une réponse.
      `;
      
      systemMessage.content += additionalContext;
    }

    console.log('Sending request to Anthropic:', { messages: anthropicMessages })

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        messages: anthropicMessages,
        max_tokens: 1024,
      }),
    })

    const data = await response.json()
    console.log('Received response from Anthropic:', data)

    if (!response.ok) {
      throw new Error(data.error?.message || 'Error calling Anthropic API')
    }

    // Extract just the text content from the response
    const content = data.content[0].text

    return new Response(
      JSON.stringify({ content }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in chat function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
