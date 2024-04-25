import { Button } from 'antd';
import { useRecoilState } from 'recoil';
import { textState } from './main';
import CardTrack from './pages/tracks/CardTrack';

const App = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <Button type="primary">CIAO</Button>
      <CardTrack />
    </div>
  );
};

export default App;
