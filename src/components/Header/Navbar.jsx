import Button from '../SharedElements/Button';

function Navbar() {
  return (
    <>
      <nav className="w-full bg-amber-50">
        <div className="container flex items-center justify-between h-24">
          <div className="cursor-pointer">
            <h1 className="font-bold text-amber-900 text-heading-5">Collers</h1>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button outline={false} text="Products"></Button>
            <Button outline={false} text="Solutions"></Button>
            <Button outline={false} text="Pricing"></Button>
            <Button outline={false} text="Resources"></Button>
            <Button outline={false} text="Log In"></Button>
            <Button></Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
