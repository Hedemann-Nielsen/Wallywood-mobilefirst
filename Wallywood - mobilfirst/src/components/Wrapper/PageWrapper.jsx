export function PageWrapper({children}) {
    return (
      <div className="mx-auto w-full h-screen bg-[#f9f9f9] md:w-10/12">
          {children}
      </div>
    )
  }