const people = [
  {
    name: 'Nader',
    age: 36,
    bio: 'Quam repudiandae dolor sint quasi consequatur, aliquam exercitationem, magni porro! Dolor ullam doloreque cum vel reprehenderit tempore?'
  },
  {
    name: 'Amanda',
    age: 24,
    bio: 'Minima repellat id nemo! Culpa pariatur aliquid maiores ratione, incidunt non ea omnis vitae repellat obcaecati.'
  },
  {
    name: 'Jason',
    age: 44,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam, ipsam fugiat corporis quae saepe officiis repudiandae modi.'
  }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}
