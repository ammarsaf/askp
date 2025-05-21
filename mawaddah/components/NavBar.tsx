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
    <Menubar className="flex justify-between m-10">
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
  );
};

export default NavBar;
