import * as Sc from './styles'

type Props = {
  message: string;
}

export function ListEmpty({ message }: Props) {
  return (
    <Sc.Container>
      <Sc.Message>
        {message}
      </Sc.Message>
    </Sc.Container>
  );
}