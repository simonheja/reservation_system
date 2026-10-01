import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const DINPro = localFont({
	src: [
		{
			path: './fonts/DINPro-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/DINPro-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/DINPro-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/DINPro-Light.woff2',
			weight: '300',
			style: 'normal',
		},
	],
})
 
export const inter = Inter({ subsets: ['latin'] });
export const dinpro = DINPro;
