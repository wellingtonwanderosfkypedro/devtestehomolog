
import { AppLayout } from "@/components/Layout";


import { MenuData } from "@/typings/global";

interface PostDetailsProps {
  post: any;
  footerData: MenuData;
}

const PostDetails: React.FC<PostDetailsProps> = () => {
  return (
    <AppLayout>
      <section className="maxDesktop:max-w-[1440px] mx-auto py-12 lg:px-24">
        
      </section>
    </AppLayout>
  );
}

export default PostDetails;



