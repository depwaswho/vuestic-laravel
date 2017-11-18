import Alert from './vuestic-alert/VuesticAlert.vue'
import Chart from './vuestic-chart/VuesticChart.vue'
import Chat from './vuestic-chat/VuesticChat.vue'
import DataTable from './vuestic-datatable/VuesticDataTable.vue'
import Feed from './vuestic-feed/VuesticFeed.vue'
import Modal from './vuestic-modal/VuesticModal.vue'
import MultiSelect from './vuestic-multi-select/VuesticMultiSelect.vue'
import PreLoader from './vuestic-preloader/VuesticPreLoader.vue'
import ProfileCard from './vuestic-profile-card/VuesticProfileCard.vue'
import ProgressBar from './vuestic-progress-bar/VuesticProgressBar.vue'
import Scrollbar from './vuestic-scrollbar/VuesticScrollbar.vue'
import SimpleSelect from './vuestic-simple-select/VuesticSimpleSelect.vue'
import SocialNews from './vuestic-social-news/VuesticSocialNews.vue'
import Switch from './vuestic-switch/VuesticSwitch.vue'
import Tabs from './vuestic-tabs/VuesticTabs.vue'
import Widget from './vuestic-widget/VuesticWidget.vue'
import Wizard from './vuestic-wizard/VuesticWizard.vue'

const VuesticComponentsPlugin = {
  install (Vue, options) {
    Vue.component(Alert.name, Alert)
    Vue.component(Chart.name, Chart)
    Vue.component(Chat.name, Chat)
    Vue.component(DataTable.name, DataTable)
    Vue.component(Feed.name, Feed)
    Vue.component(Modal.name, Modal)
    Vue.component(MultiSelect.name, MultiSelect)
    Vue.component(PreLoader.name, PreLoader)
    Vue.component(ProfileCard.name, ProfileCard)
    Vue.component(ProgressBar.name, ProgressBar)
    Vue.component(Scrollbar.name, Scrollbar)
    Vue.component(SimpleSelect.name, SimpleSelect)
    Vue.component(SocialNews.name, SocialNews)
    Vue.component(Switch.name, Switch)
    Vue.component(Tabs.name, Tabs)
    Vue.component(Widget.name, Widget)
    Vue.component(Wizard.name, Wizard)
  }
}

export default VuesticComponentsPlugin
