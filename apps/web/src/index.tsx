import "@fontsource-variable/inter"
import "@packages/config-tailwind/styles/base.styles.css"

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-normal">Sphinx of black quartz, judge my vow.</h1>
      <form action="get">
        <input type="text"/>
      </form>
    </div>
  );
}
