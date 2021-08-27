import Bar from "../components/Bar";
import CssBaseline from "@material-ui/core/CssBaseline";

const Layout = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <Bar />
      {children}
    </div>
  );
};

export default Layout;
