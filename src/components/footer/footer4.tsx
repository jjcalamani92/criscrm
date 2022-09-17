export const Footer4 = () => {
  return (
    <footer className="w-full py-16 bg-gray-100">
        <div className="md:px-12 lg:px-28">
          <div className="container m-auto space-y-6 text-gray-600">
            <img src="https://tailus.io/images/logo.svg" alt="logo tailus" className="w-40 m-auto" />
            <ul role="list" className="py-4 flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-8">
              <li role="listitem"><a href="#" className="hover:text-cyan-500">Home</a></li>
              <li role="listitem"><a href="#" className="hover:text-cyan-500">Features</a></li>
              <li role="listitem"><a href="#" className="hover:text-cyan-500">Get started</a></li>
              <li role="listitem"><a href="#" className="hover:text-cyan-500">About us</a></li>
            </ul>
            <div className="w-max m-auto flex items-center justify-between space-x-4">
              <a href="tel:+243996660436" aria-label="call">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </a>
              <a href="mailto:hello@mail.com" aria-label="send mail">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
              </a>
              <a href="#" title="facebook" target="blank" aria-label="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" title="linkedin" target="blank" aria-label="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 m-auto" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
            <div className="text-center">
              <span className="text-sm tracking-wide">Copyright © tailus <span id="year" /> | All right reserved</span>
            </div>
          </div>
        </div>
      </footer>
  )
}