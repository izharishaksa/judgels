import { connect } from 'react-redux';

import { withBreadcrumb } from '../../../../../../components/BreadcrumbWrapper/BreadcrumbWrapper';
import { ChangeAvatarPanel } from '../../../../panels/avatar/ChangeAvatarPanel/ChangeAvatarPanel';
import { AppState } from '../../../../../../modules/store';
import { selectUserJid } from '../../../../../../modules/session/sessionSelectors';
import { avatarActions as injectedAvatarActions } from '../../../../modules/avatarActions';

export function createChangeAvatarPage(avatarActions) {
  const mapStateToProps = (state: AppState) => ({
    userJid: selectUserJid(state),
  });
  const mapDispatchToProps = {
    onDropAccepted: (userJid: string, files: File[]) => avatarActions.updateAvatar(userJid, files[0]),
    onDropRejected: (files: File[]) => avatarActions.rejectAvatar(files[0]),
    onRenderAvatar: avatarActions.renderAvatar,
    onDeleteAvatar: avatarActions.deleteAvatar,
  };
  const mergeProps = (stateProps, dispatchProps) => ({
    onDropAccepted: (files: File[]) => dispatchProps.onDropAccepted(stateProps.userJid, files),
    onDropRejected: dispatchProps.onDropRejected,
    onRenderAvatar: () => dispatchProps.onRenderAvatar(stateProps.userJid),
    onDeleteAvatar: () => dispatchProps.onDeleteAvatar(stateProps.userJid),
  });
  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChangeAvatarPanel);
}

export default withBreadcrumb('Change avatar')(createChangeAvatarPage(injectedAvatarActions));
