export const WomensCollection = () => {
  return (
    <section
      className='flex overflow-hidden flex-col items-end px-14 max-w-full rounded bg-stone-950 w-[570px] max-md:pl-5'
      aria-label="Women's collection"
    >
      <div className='flex relative flex-col items-start pt-36 pb-6 w-full min-h-[284px] max-md:pt-24 max-md:pr-5'>
        <img
          src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/c5f30a7c68384d63654c43893ede571bbde725b7?placeholderIfAbsent=true'
          alt="Women's Fashion Collection"
          className='object-cover absolute inset-0 size-full'
        />
        <div className='relative max-w-full w-[255px] z-10'>
          <div className='w-full text-neutral-50'>
            <h2 className='text-2xl font-semibold tracking-wider leading-none'>
              Women&apos;s Collections
            </h2>
            <p className='mt-4 text-sm leading-5'>
              Featured woman collections that give you another vibe.
            </p>
          </div>
          <a
            href='#'
            className='mt-4 text-base font-medium text-white w-[81px] group hover:text-red-500 transition-colors'
          >
            <span>Shop Now</span>
            <div className='h-0.5 bg-white w-full mt-1 group-hover:bg-red-500 transition-colors' />
          </a>
        </div>
      </div>
    </section>
  );
};
