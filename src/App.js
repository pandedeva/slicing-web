import "./App.css";

function App() {
  return (
    <div>
      <div className="flex font-poppins">
        <div class="w-7/12">
          <div class="container py-16 px-32">
            {/* logo */}
            <div className="text-primary font-semibold italic text-xl pb-[156px]">Enlighten.</div>
            {/* logo end */}
            {/* hero start */}
            <div>
              <div className="bg-[rgba(17,63,226,0.1)] uppercase text-btn font-bold tracking-widest inline-block py-1 px-4 rounded-full">coming soon</div>
              <h1 className="my-4 text-5xl font-bold text-primary leading-relaxed w-10/12">Get your dancing shoes ready</h1>
              <p className="leading-loose text-base text-gray-500 w-10/12">We're putting the finishing touches on our website and getting ready to launch. Sign up for updates and be the first to know when we go live.</p>
            </div>
            {/* hero end */}
            <form className="flex mt-10">
              <input type="email" className="mr-5 border-2 h-12 px-5 rounded-lg w-full" placeholder="Email address" />
              <button className="px-8 shrink-0 py-3 bg-btn text-white rounded-lg">Invite Me</button>
            </form>
            <p className="text-xs text-gray-500 leading-loose mt-5 ">Sign up for updates to be the first to know when we launch. No spam, just important information and exclusive offers.</p>
          </div>
        </div>
        <div class="w-5/12">
          <img src="cover.png" className="w-full h-full bg-cover" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default App;
