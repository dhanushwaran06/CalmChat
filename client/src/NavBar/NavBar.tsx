export default function NavBar() {
  return (
    <div>
      <header>
        <div>
          <a className="/" href="">
            Calm | Chatbot
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a className="" href="/">
                Home
              </a>
              <a className="" href="/login">
                Login
              </a>
              <a className="" href="/signup">
                Signup
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
