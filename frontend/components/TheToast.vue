<template>
  <div
    id="toast-success"
    class="hidden bg-gradient-to-r from-blue-500/80 to-purple-500/60 py-5 px-4 xl:px-5 xl:py-3 2xl:p-5 rounded-xl absolute top-2 2xl:left-[25%] left-0 right-0 xl:right-[3%] 2xl:right-[50%] z-[9999] flex items-center mb-4 w-full max-w-5xl text-white bg-white/10 backdrop-blur-3xl"
    role="alert">
    <div
      class="inline-flex flex-shrink-0 lg:justify-center lg:items-center w-10 h-10 rounded-xl">
      <img
        width="40"
        height="40"
        alt="Ukraine national flag"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADjUlEQVRoge2ZT2wUVRzHv9+306rQkgCSiIU0IDBNOO6C4diGi57w4J9YTTyYNE0L4U5MMDHehW5lY8KpJFA8aKIcG25E2r27DZoGazVK98COJS2d+XqAGJw/nXn7Z2jCfo6/93s7n9++eTPz3gO6dHmxYVt+ZVaFwXrjpAkwLLBogCEB+wH0Pc3wBKwAqBGqCppb+mvXXVxk0OqlWyrgjfLaQTGYAPSRgAHLKy8r4Izjm/K9czuWm3VoqoAjlxr7fAdfAPgEQG+zF3/KBoGrTkGfLY7temDb2bqAw9Peh4IuA9hj2zeFVRGTS+P91206ZS6gWFFP3femAXxqrWYBhcpup+9sdYyPM+VnSXq9oh0v+41vBb7Vml42JN3acPrfXRnjWlquSUsoVtSTpzwAkHz7Jd/7/visUudXagF135vOU/4ZTj964H2VlrTlLXT4a29U0kz7nOyR8MHSRP+NpPbEAgamHu7tNfwZwKsdMctOvacgN+kRm3gL9Rp+iecvDwB7Hgf8PKkxdgSOXFo74Dv+L2j9JdUuNlhwjv469sr9cEPsCAROMIntIw8AvcGmPx7XEC3gooyo0Y4rWWKojzGrQiQeDgy+1ngTwoF8tLIjYODQ6sNiOB4pwAQYzkfJHoIj4VikAIqlfHTsEZg+AgFxLB+dpnDDgegIPFlJbU8UdYt7jPbFxLYL/eGAEw7cG4nMk21F+DkaNwJeHiJN0ggHogUQf+Si0hwRt+gkDrCYj4s9BGvhWKQAQQv56NgjIOIWfROrMJePjj2GirhFPqclmKB2YgnAwVyssnPfuPOHSPxvNy86B4gAwrX8vDJCXAvLAwnrAeOYMoCNjktlZ93AKcc1xBbAoz8tA7raWScLyG/o3vk9rilxTWz8ngsArPcqO8CqgZ+4Jk4sgMfv1EWd7YxTdgSO060m/pFbbmw57sJ1gJX2a2VEKDtDd29ulZK6M2fcwQlC37XPKhuUfjR/7jyflpdaAHnTp6dRgrfao5YOiR/4j97j8O3NtNzUAgCApeoaPf8MoCut66UglLmy8x2Wqqk700ATBxybtRPvU5hC+3ft/hY4kXbPh8k0As/iuPM3jDgEYBrAum3/GNZBThnfGbKVB1o85FPt1EAQbE6CGIX9t9NvIGYMnHLSSyoLbTlmlWCwWCoF4AjFoiAXT04t/ztmBbRMmEUBC4aaw7H5aty3TZcuXez4F3L2Eh2go8QYAAAAAElFTkSuQmCC" />
      <span class="sr-only">Check icon</span>
    </div>

    <div class="grid lg:grid-cols-4 lg:place-items-center mx-5">
      <div class="lg:col-span-3">
        <h5 class="text-white/80 text-sm font-light">
          Every day people are dying because of Russia's war against Ukraine,
          please help Ukraine to stand and win by donating funds to the
          President of Ukraine's official charity.
        </h5>
      </div>

      <div class="lg:col-span-1 lg:my-auto mt-6">
        <nuxt-link
          to="https://u24.gov.ua/"
          class="text-white py-3 font-black uppercase px-5 mt-10 text-center border w-[150px] pulseNeon border-stone-500 transition-all hover:border-stone-50 rounded-md text-sm md:text-lg lg:text-lg 2xl:text-base"
          target="_blank"
          >United24</nuxt-link
        >
      </div>
    </div>
    <button
      type="button"
      class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex self-start lg:self-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-success"
      aria-label="Close"
      id="toastClose">
      <span class="sr-only">Close</span>
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</template>
