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

export function RedButton({ children, size }: Omit<ButtonProps, 'color'>) {
  return (
    <Button color="red" size={size}>{children}</Button>
  )
}

export function LiskoSubstitutionAfter() {
  return (
    <div>
      <h1>Liskov Substitution Principle</h1>
      <h2>After</h2>
      <RedButton size='xl'>Click me</RedButton>
      <Button size='xl' color='red'>Click me</Button>
    </div>
  )
}
