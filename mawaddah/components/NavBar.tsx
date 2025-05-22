import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

export const NavBar = () => {
  return (
    <div className="w-auto px-10">
      {' '}
      <Menubar className="flex justify-between m-10 bg-purple-100">
        <div>
          <MenubarMenu>
            <MenubarTrigger>mawaddah</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>What is Mawadddah?</MenubarItem>
              <MenubarItem>100 Crucial Questions</MenubarItem>
              <MenubarItem>Inspiration</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>

        <div className="flex">
          <MenubarMenu>
            <MenubarTrigger>Pricing</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Free Tier</MenubarItem>
              <MenubarItem>Premium</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>About Us</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Login</MenubarTrigger>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  );
};

export default NavBar;
