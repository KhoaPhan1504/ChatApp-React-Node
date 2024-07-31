import {PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh'}}>
      <PrettyChatWindow
        projectId='131c3273-f090-4efd-b5d3-3191a92e943c'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  )
};
export default ChatsPage;