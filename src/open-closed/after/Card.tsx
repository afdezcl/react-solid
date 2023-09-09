interface CardProps {
  title: string
  children: React.ReactElement
}

export function Card({ title, children }: CardProps) {
  return ( 
    <div className="card">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

