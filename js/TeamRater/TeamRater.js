import TeamRaterVue from './TeamRaterVue.vue'

export const TeamRater = function(site, element) {
    const VueHelper = site.VueHelper

    const json = JSON.parse(element.textContent);

    element.innerHTML = ''
    element.style.display = 'block'

    const template = `<div><team-rater :json="json"></team-rater></div>`;

    const components = {
        'team-rater': TeamRaterVue
    }

    const app = VueHelper.createApp({
        site,
        data: function() {
            return {
                json: json
            }
        },
        template: template,
        components: components
    })

    app.config.globalProperties.$site = site
    VueHelper.mount(app, element)
}