export default function Nav({
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleTheme,
  theme,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  toggleTheme: () => void;
  theme: string;
}) {
  return (
    <div className="px-6 py-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Temako Market</span>
            <img className="h-10 " src="/media/logo.png" alt="star wars logo" />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => {
              setMobileMenuOpen(true);
            }}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* <!-- Heroicon name: outline/bars-3 --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Product
          </a>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => {
              toggleTheme();
            }}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Theme <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {mobileMenuOpen && (
        <div role="dialog" aria-modal="true">
          <div
            tabIndex={-1}
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                {/* <!-- Heroicon name: outline/x-mark --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Product
                  </a>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Marketplace
                  </a>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <button
                    onClick={() => {
                      toggleTheme();
                    }}
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Theme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
