export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">

      <section id="hero-container" className="md:w-1/2 prose text-center font-mono">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Flashcards <span className="text-primary">HQ</span></h1>
              <p className="py-4">Your one stop solution to flashcards! Use community made decks or make your own.</p>
              <button className="btn btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </section>

      <section id="mobile-info-carousel" className="p-4 md:w-1/2 h-screen flex items-center justify-center">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div className="w-full h-full carousel rounded-box">
                <div className="carousel-item w-full">
                  <div className="prose pt-10 px-2">
                    <h4 className="text-primary">Why flashcards? <kbd className="kbd kbd-xs text-primary">Swipe right</kbd></h4>
                    <hr />
                    <p>
                      Flashcards are like tiny treasure
                      <br />
                      chests of knowledge!
                      <br />
                      Each card is a puzzle waiting to be solved.
                      <br />
                      Flip it, and voilà - the answer!
                      <br />
                    </p>
                    <blockquote>
                      Make studying less of a <br /> snooze-fest and more of <br /> a fun quiz.
                    </blockquote>
                  </div>
                </div>
                <div className="carousel-item w-full">
                  <div className="prose pt-10 px-2">
                    <h4 className="text-primary">Why us? <kbd className="kbd kbd-xs text-primary">Swipe left</kbd></h4>
                    <hr />
                    <p>
                      Use community made flashcards.
                      Make your deck with our easy to use editor.
                      <br />
                    </p>
                    <ul>
                      <li>
                        Add points like this
                      </li>
                      <li>
                        And like this
                        <ol>
                          <li>
                            More points
                          </li>
                          <li>
                            More knowledge
                          </li>
                        </ol>
                      </li>
                    </ul>
                    <blockquote>
                      Insert quotes!
                    </blockquote>
                    <p>
                      Give emphasis like <strong>this</strong> or <em>this</em>
                    </p>
                    <p>
                      <strong><em>Share with the community or keep it private</em></strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
