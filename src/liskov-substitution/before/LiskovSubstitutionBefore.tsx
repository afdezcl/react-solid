interface ButtonProps { 
  children: React.ReactNode;
  color: string;
  size: 'sm' | 'xl';
}

export function Button({ children, color, size }: ButtonProps) {
  return (
    <button style={{color, fontSize: size === 'xl' ? '32px' : '16px'}}>{children}</button>
  )
}

export function RedButton({ children, isLarge }: { children: React.ReactNode; isLarge: boolean }) {
  return (
    <Button color="red" size={isLarge ? 'xl' : 'sm'}>{children}</Button>
  )
}

export function LiskoSubstitutionBefore() {
  return (
    <div>
      <h1>Liskov Substitution Principle</h1>
      <h2>Before</h2>
      <RedButton isLarge={true}>Click me</RedButton>
      <Button size='xl' color='red'>Click me</Button>
    </div>
  )
}
