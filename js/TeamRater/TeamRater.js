import TeamRaterVue from './TeamRaterVue.vue'

export const TeamRater = function(site, element) {
    const json = JSON.parse(element.textContent);

    element.innerHTML = ''
    element.style.display = 'block'

    const template = `<div><team-rater :json="json"></team-rater></div>`;

    const components = {
        'team-rater': TeamRaterVue
    }

    new Site.Vue({
        el: element,
        site,
        data: {
            json: json
        },
        template: template,
        components: components
    })
}