import React from "react";

function Categories() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto">
      <div>
        <p class="flex items-center justify-between p-4 mb-8 text-sm font-semibold focus:outline-none focus:shadow-outline-purple">
          <h1 className="text-3xl">Featured Categories</h1>
          <span className="text-md">View All →</span>
        </p>
      </div>
      <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-5">
        <div class="mb-5 bg-indigo-100">
          <div class="px-10 py-10">
            <div class="">
              <h3 class="text-xl">
                <a
                  href="https://bookworm.madrasthemes.com/product-category/a/"
                  class=""
                >
                  Arts &amp; Photography
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div class="mb-5 bg-red-100">
          <div class="px-10 py-10">
            <div class="">
              <h3 class="text-xl">
                <a
                  href="https://bookworm.madrasthemes.com/product-category/a/"
                  class=""
                >
                  Arts &amp; Photography
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div class="mb-5 bg-green-100">
          <div class="px-10 py-10">
            <div class="">
              <h3 class="text-xl">
                <a
                  href="https://bookworm.madrasthemes.com/product-category/a/"
                  class=""
                >
                  Arts &amp; Photography
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div class="mb-5 bg-yellow-100">
          <div class="px-10 py-10">
            <div class="">
              <h3 class="text-xl">
                <a
                  href="https://bookworm.madrasthemes.com/product-category/a/"
                  class=""
                >
                  Arts &amp; Photography
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div class="mb-5 bg-blue-100">
          <div class="px-10 py-10">
            <div class="">
              <h3 class="text-xl">
                <a
                  href="https://bookworm.madrasthemes.com/product-category/a/"
                  class=""
                >
                  Arts &amp; Photography
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
