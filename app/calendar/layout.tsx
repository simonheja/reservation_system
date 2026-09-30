import { inter } from '@/app/ui/fonts'

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-full flex flex-col">{children}</div>
  );
}
