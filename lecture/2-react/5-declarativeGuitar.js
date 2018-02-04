const strings = ['E', 'A', 'D', 'G', 'B', 'E']

function Guitar() {
  return (
    <Guitar>
      {strings.map(note => <String note={note} />)}
    </Guitar>
  )
}
