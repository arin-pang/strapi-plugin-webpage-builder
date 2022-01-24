import pluginPkg from '../../package.json';
import Wysiwyg from './components/Wysiwyg';
import pluginId from './pluginId';
// import pluginIcon from './pluginIcon';
// import Settings from './containers/Settings';

export default {
  register(app) {
    const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
    // const menuSection = {
    //   id: pluginId,
    //   title: {
    //     id: `${pluginId}.foo`,
    //     defaultMessage: 'Webpage Builder',
    //   },
    //     links: [
    //       {
    //         title: 'General',
    //         to: `${strapi.settingsBaseURL}/${pluginId}/general`,
    //         name: 'general',
    //       },
    //       {
    //         title: {
    //           id: `${pluginId}.bar`,
    //           defaultMessage: 'About',
    //         },
    //         to: `${strapi.settingsBaseURL}/${pluginId}/about`,
    //         name: 'about',
    //       },
    //     ],
    // };

    const plugin = {
      // blockerComponent: null,
      // blockerComponentProps: {},
      description: pluginDescription,
      // icon: pluginPkg.strapi.icon,
      id: pluginId,
      initializer: () => null,
      // injectedComponents: [],
      isReady: true,
      // isRequired: pluginPkg.strapi.required || false,
      // leftMenuLinks: [],
      // leftMenuSections: [],
      // mainComponent: null,
      name: pluginPkg.strapi.name,
      // preventComponentRendering: false,
      // settings: {
      //   mainComponent: Settings,
      //   menuSection,
      // },
      // trads: {},
    };

    // app.addMenuLink({
    //   to: `/plugins/${pluginId}`,
    //   icon: pluginIcon,
    //   intlLabel: {
    //     id: `${pluginId}.foo`,
    //     defaultMessage: 'My Plugin',
    //   },
    //   // permissions: pluginPermissions.main,
    //   Component: async () => Settings,
    // });

    app.addFields({ type: 'json', Component: Wysiwyg });
    app.registerPlugin(plugin);
  },
};
