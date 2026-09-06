import { notFound } from "next/navigation";
import Inputfield from "../../component/Inputfield";
import Link from "next/link";

type Props = {
    params: Promise<{ slug?: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params, searchParams }: Props) {
    const ParmasValue = await params;
    const resolvedSearchParams = await searchParams;
    const q = resolvedSearchParams?.q;

    if (!ParmasValue?.slug) {
        const res1 = await fetch('https://dummyjson.com/products?limit=200');
        const res2 = await fetch('https://dummyjson.com/products/categories');
        const data = await res1.json();
        const categoriesData = await res2.json();

        let filteredProducts = data.products || [];
        if (typeof q === 'string' && q.trim() !== '') {
            filteredProducts = filteredProducts.filter((i: any) => i.title.toLowerCase().includes(q.toLowerCase()));
        }

        const categories = [{ slug: 'all', name: 'All' }, ...(Array.isArray(categoriesData) ? categoriesData : [])];

        return (
            <div className="min-h-screen bg-gray-50 py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <Inputfield />
                    <h1 className="text-4xl font-black text-gray-900 mb-6 mt-8">All Products</h1>

                    <div className="flex items-center overflow-x-auto gap-3 pb-4 mb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] px-1">
                        {categories.map((cat: any) => {
                            const isSelected = cat.slug === 'all';
                            const linkHref = cat.slug === 'all' ? '/products' : `/products/${cat.slug}`;
                            return (
                                <Link
                                    key={cat.slug}
                                    href={linkHref}
                                    className={`px-6 py-2.5 rounded-xl whitespace-nowrap text-sm border-2 font-bold transition-all duration-200 ${isSelected ? 'bg-green-600 text-white border-green-600 shadow-md scale-105' : 'bg-white text-gray-700 border-gray-200 hover:border-green-500 hover:text-green-700'}`}
                                >
                                    {cat.name}
                                </Link>
                            )
                        })}
                    </div>

                    {filteredProducts.length === 0 ? (
                        <p className="text-gray-500 py-10 font-bold text-lg">No products found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((i: any) => (
                                <Link href={`/products/${i.category}/${i.id}`} key={i.id} className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col hover:border-green-300">
                                    <img src={i.thumbnail || (Array.isArray(i.images) ? i.images[0] : i.images)} alt={i.title} className="h-48 w-full object-contain mb-4" />
                                    <p className="text-xs font-semibold text-green-600 uppercase mb-1">{i.category}</p>
                                    <h2 className="text-lg font-bold text-gray-900 line-clamp-1 mb-2">{i.title}</h2>
                                    <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow">{i.description}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="font-bold text-xl text-green-700">${i.price}</span>
                                        <div className="bg-green-50 text-green-700 px-4 py-1.5 rounded border border-green-200 font-bold">View</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    const [category, productId, ...undefinedpage] = ParmasValue.slug;

    if (undefinedpage.length > 0) {
        return notFound();
    }

    if (category && productId) {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!res.ok) return notFound();
        const data = await res.json();

        return (
            <div className="min-h-screen bg-gray-50 py-16 px-4 flex items-center justify-center">
                <div className="max-w-[1000px] w-full bg-white rounded-2xl border border-gray-200 flex flex-col md:flex-row overflow-hidden shadow-sm">
                    <div className="md:w-1/2 p-10 border-b md:border-b-0 md:border-r border-gray-100 flex justify-center">
                        <img src={data.thumbnail || (Array.isArray(data.images) ? data.images[0] : data.images)} alt={data.title} className="w-full max-h-[400px] object-contain" />
                    </div>
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <p className="text-green-600 font-bold uppercase text-sm mb-2">{data.category}</p>
                        <h1 className="text-3xl font-black text-gray-900 mb-4">{data.title}</h1>
                        <p className="text-3xl text-green-700 font-bold mb-6">${data.price}</p>
                        <p className="text-gray-600 mb-8">{data.description}</p>
                        <div className="flex gap-4">
                            <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700">Add to Cart</button>
                            <button className="flex-1 bg-green-50 text-green-700 border border-green-200 py-3 rounded-xl font-bold hover:bg-green-100">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const res1 = await fetch(`https://dummyjson.com/products/category/${category}?limit=200`);
    const res2 = await fetch('https://dummyjson.com/products/categories');
    const data = await res1.json();
    const categoriesData = await res2.json();

    let filteredProducts = data.products || [];
    if (typeof q === 'string' && q.trim() !== '') {
        filteredProducts = filteredProducts.filter((i: any) => i.title.toLowerCase().includes(q.toLowerCase()));
    }

    const categories = [{ slug: 'all', name: 'All' }, ...(Array.isArray(categoriesData) ? categoriesData : [])];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <Inputfield />
                <h1 className="text-4xl font-black text-gray-900 mb-6 mt-8 capitalize">{category.replace('-', ' ')} Products</h1>

                <div className="flex items-center overflow-x-auto gap-3 pb-4 mb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] px-1">
                    {categories.map((cat: any) => {
                        const isSelected = category === cat.slug;
                        const linkHref = cat.slug === 'all' ? '/products' : `/products/${cat.slug}`;
                        return (
                            <Link
                                key={cat.slug}
                                href={linkHref}
                                className={`px-6 py-2.5 rounded-xl whitespace-nowrap text-sm border-2 font-bold transition-all duration-200 ${isSelected ? 'bg-green-600 text-white border-green-600 shadow-md scale-105' : 'bg-white text-gray-700 border-gray-200 hover:border-green-500 hover:text-green-700'}`}
                            >
                                {cat.name}
                            </Link>
                        )
                    })}
                </div>

                {filteredProducts.length === 0 ? (
                    <p className="text-gray-500 py-10 font-bold text-lg">No products found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((i: any) => (
                            <Link href={`/products/${i.category}/${i.id}`} key={i.id} className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col hover:border-green-300">
                                <img src={i.thumbnail || (Array.isArray(i.images) ? i.images[0] : i.images)} alt={i.title} className="h-48 w-full object-contain mb-4" />
                                <p className="text-xs font-semibold text-green-600 uppercase mb-1">{i.category}</p>
                                <h2 className="text-lg font-bold text-gray-900 line-clamp-1 mb-2">{i.title}</h2>
                                <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow">{i.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="font-bold text-xl text-green-700">${i.price}</span>
                                    <div className="bg-green-50 text-green-700 px-4 py-1.5 rounded border border-green-200 font-bold">View</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
