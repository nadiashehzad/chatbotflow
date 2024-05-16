import React from 'react'
import Logo from '../Assets/logo.png'
const ChatBot = () => {
  return (
    <div>
 <df-messenger
    intent="WELCOME"
    chat-title="EcommerceWebsite"
    chat-icon={Logo }
    agent-id="a242133c-1b8e-48bf-8f75-0fbe05015c03"
    language-code="en"
    
  ></df-messenger>
  </div>
  )
}

export default ChatBot