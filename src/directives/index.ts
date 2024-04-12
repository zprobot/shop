import { useIntersectionObserver } from "@vueuse/core"
import type { App } from "vue/dist/vue.js"

export const lazyPlugin = {
    install(app:App) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                      },
                )
            }
        })
    }
}