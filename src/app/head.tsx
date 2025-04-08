export default function Head() {
  return (
    <>
      <title>WIC Assist Web</title>

      {/* Предзагрузка PDF на русском и английском (если нужно) */}
      <link rel="prefetch" href="/pdf/rules_RU.pdf" as="fetch" />
      <link rel="prefetch" href="/pdf/rules_EN.pdf" as="fetch" />

      <link rel="prefetch" href="/assets/got_background.jpg" as="image" />
    </>
  );
}
