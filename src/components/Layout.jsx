export default function Layout({ children, id }) {
  return (
    <div
      className="flex w-full items-center justify-center min-h-screen  px-4 lg:px-16 "
      id={id}
    >
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}
