<template>
  <div>
    <header style="color: green;background-color: pink;">
      <slot name="header">
        Default header content
      </slot>
    </header>
    <main>
      <slot name='main' />
    </main>
  </div>
</template>