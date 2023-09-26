import { ref, shallowRef, onMounted, onBeforeUnmount } from "vue";

export function useDimension(dimension = "width") {
  const element = ref();
  const functionRef = (el: any) => {
    element.value = el;
  };

  const observer = shallowRef();

  onMounted(() => {
    observer.value = new ResizeObserver((entries) => {
      //   element.value.textContent = entries[0].contentRect[dimension];
      element.value.textContent = (entries[0].contentRect as any)[dimension];
      console.log("element.value.textContent => ", element.value.textContent);
    });

    observer.value.observe(element.value);
  });

  onBeforeUnmount(() => {
    observer.value.disconnect();
  });

  return functionRef;
}
