// Module imports
import localFont from 'next/font/local'





export const ArticulatFont = localFont({
	display: 'swap',
	variable: '--font-articulat',
	src: [
		{
			path: '../../public/fonts/Articulat/Articulat300.woff2',
			style: 'normal',
			weight: '300',
		},
		{
			path: '../../public/fonts/Articulat/Articulat400.woff2',
			style: 'normal',
			weight: '400',
		},
		{
			path: '../../public/fonts/Articulat/Articulat500.woff2',
			style: 'normal',
			weight: '500',
		},
		{
			path: '../../public/fonts/Articulat/Articulat600.woff2',
			style: 'normal',
			weight: '600',
		},
		{
			path: '../../public/fonts/Articulat/Articulat700.woff2',
			style: 'normal',
			weight: '700',
		},
		{
			path: '../../public/fonts/Articulat/Articulat900.woff2',
			style: 'normal',
			weight: '900',
		},
	],
})
