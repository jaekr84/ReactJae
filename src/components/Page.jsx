function Page(props) {

  return (
      <main className='p-4 text-white grow mi-main bg-gray-800'>
          <h2 className='mb-4 text-2xl font-bold'>{props.title}</h2>
          {props.children}
      </main>
  )
}

export default Page