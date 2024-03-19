import "./App.css";

function App() {
  return (
    <div className="flex">
      <div className="w-7/12">
        <div className="container py-20 px-40 mx-auto">
          <div className="font-semibold text-3xl italic text-primary mb-[156px]">Enlighten.</div>
          <div className="mb-10">
            <div className="rounded-full px-4 py-1 bg-[rgba(17,63,226,0.1)] uppercase text-btn font-bold tracking-widest text-sm inline-block mb-4">coming soon</div>
            <h1 className="mb-4 text-primary text-[44px] font-bold font-poppins ">Get your dancing shoes ready</h1>
            <p className="text-primary leading-loose opacity-75 text-lg">We're putting the finishing touches on our website and getting ready to launch. Sign up for updates and be the first to know when we go live.</p>
          </div>
          <form className="flex mb-5 ">
            <input type="email" placeholder="Email address" className="border-2 mr-5 px-5 h-14 w-full rounded-lg" />
            <button className="bg-btn text-white rounded-lg shrink-0 px-8 py-1">Invite Me</button>
          </form>
          <p className="text-sm text-primary opacity-75 leading-relaxed">Sign up for updates to be the first to know when we launch. No spam, just important information and exclusive offers.</p>
        </div>
      </div>
      <div className="w-5/12">
        <img src="./cover.png" className="w-full h-full box-border bg-cover" alt="" />
      </div>
    </div>
  );
}

export default App;
