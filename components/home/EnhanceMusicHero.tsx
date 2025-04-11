export const EnhanceMusicHero = () => {
  return (
    <section
      className='overflow-hidden px-7 pt-24 bg-black rounded min-w-60 w-[570px] max-md:px-5 max-md:max-w-full'
      aria-label='Music experience promotion'
    >
      <div className='flex relative flex-col items-start px-1 pt-96 pb-8 min-h-[511px] max-md:pt-24 max-md:pr-5 max-md:max-w-full'>
        <img
          src='https://cdn.builder.io/api/v1/image/assets/50863f29051940439648c044a13e82c2/73f5265c2f5d001cb1791ad0b057a894190088c4?placeholderIfAbsent=true'
          alt='PlayStation 5 Console'
          className='object-cover absolute inset-0 size-full'
        />
        <div className='relative max-w-full w-[242px] z-10'>
          <div className='w-full text-neutral-50'>
            <h2 className='text-2xl font-semibold tracking-wider leading-none'>
              PlayStation 5
            </h2>
            <p className='mt-4 text-sm leading-5'>
              Black and White version of the PS5 coming out on sale.
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
