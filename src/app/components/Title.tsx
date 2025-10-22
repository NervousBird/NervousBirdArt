export function Header() {
  const nervous = 'Nervous'.split('')
  const bird = 'Bird'.split('')
  const art ='Art'.split('')

  return (
    <div className="flex flex-col">
      <div className="flex">
        {nervous.map((letter, idx) => (
        <h1 className="letter" key={idx}>{letter}</h1>
      ))}
      </div>
      <div className="flex">
        {bird.map((letter, idx) => (
        <h1 className="letter" key={idx}>{letter}</h1>
      ))}
      </div>
      <div className="flex">
        {art.map((letter, idx) => (
        <h1 className="letter" key={idx}>{letter}</h1>
      ))}
      </div>
    </div>
  )
}

export default Header