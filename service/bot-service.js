export const getResponse = (message, params) => {
  return {
    fulfillmentText: message,
    fulfillmentMessages: [
      {
        text: {text: [message]}
      }
    ],
    source: "example.com",
    payload: {
        // "expectUserResponse": true,
    },
    // outputContexts: [
    //   {
    //     name: "projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name",
    //     lifespanCount: 5,
    //     parameters: params,
    //   }
    // ],
  }
}