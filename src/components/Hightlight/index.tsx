import * as Sc from './styles';

type Props = {
  title: string;
  subtitle: string;
}


export function Hightlight({ subtitle, title }: Props) {
  return (
    <Sc.Container>
      <Sc.Title>
        {title}
      </Sc.Title>
      <Sc.Subtitle>
        {subtitle}

      </Sc.Subtitle>
    </Sc.Container>
  )
}