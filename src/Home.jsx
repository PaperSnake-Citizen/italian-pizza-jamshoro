import menuData from './menuData';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="home"
        className="pt-24 min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
        }}
      >
        <div className="w-full bg-black/50 py-20">
          <div className="max-w-6xl mx-auto text-white px-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-xl">
              Freshly Baked <span className="text-red-500">Italian Pizzas</span>
              <br /> Delivered Hot & Fast
            </h1>

            <p className="mt-6 text-lg sm:text-xl max-w-xl text-gray-200">
              Crispy crust, fresh toppings, premium cheese — experience the true
              taste of Italy delivered right to your doorstep.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/923458975571"
                className="bg-red-600 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-red-700 duration-200"
              >
                Order Now
              </a>

              <button
                onClick={() => {
                  document.getElementById("menu")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="bg-white text-gray-900 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200 duration-200"
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}

      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Our <span className="text-red-600">Menu</span>
          </h2>
          <p className="text-gray-600 mt-3 text-center">
            Handcrafted pizzas, broast, rolls & more!
          </p>

          <div className="mt-12 space-y-16">
            {menuData.map((section, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold text-red-600 mb-6">
                  {section.category}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-red-600/10 to-orange-500/10 backdrop-blur-sm shadow-xl      rounded-2xl p-6 border border-red-600/20 hover:shadow-2xl hover:-translate-y-1 duration-300"
                    >
                      <h4 className="text-xl font-semibold">{item.name}</h4>

                      {item.price && (
                        <p className="text-red-600 font-bold mt-2">{item.price}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              About <span className="text-red-600">Us</span>
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We are passionate pizza makers delivering fresh, hot, and delicious
              pizzas prepared with authentic techniques and premium
              ingredients.  
              <br /> <br />
              Our mission is simple — **serve the best pizza in town, every time.**
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            Have questions or want to place an order? Click the button below to message us on WhatsApp!
          </p>

          <a
            href="https://wa.me/923458975571"
            className="inline-block mt-8 bg-red-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-red-700 duration-200"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>


    </div>
  );
}
