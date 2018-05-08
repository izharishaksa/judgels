import * as React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';

import { FullPageLayout } from '../../../../../../../../components/layouts/FullPageLayout/FullPageLayout';

import ContentWithSidebar, {
  ContentWithSidebarItem,
  ContentWithSidebarProps,
} from '../../../../../../../../components/ContentWithSidebar/ContentWithSidebar';
import { LoadingState } from '../../../../../../../../components/LoadingState/LoadingState';
import { ButtonLink } from '../../../../../../../../components/ButtonLink/ButtonLink';
import ContestOverviewPage from './overview/ContestOverviewPage/ContestOverviewPage';
import ContestAnnouncementsPage from './announcements/ContestAnnouncementsPage/ContestAnnouncementsPage';
import ContestScoreboardPage from './scoreboard/ContestScoreboardPage/ContestScoreboardPage';
import { Contest } from '../../../../../../../../modules/api/uriel/contest';
import { ContestTab, ContestWebConfig } from '../../../../../../../../modules/api/uriel/contestWeb';
import { AppState } from '../../../../../../../../modules/store';
import { selectContest } from '../../../modules/contestSelectors';
import { selectContestWebConfig } from '../../../modules/contestWebConfigSelectors';

import './SingleContestRoutes.css';

interface SingleContestRoutesProps {
  contest?: Contest;
  contestWebConfig?: ContestWebConfig;
}

const SingleContestRoutes = (props: SingleContestRoutesProps) => {
  const { contest, contestWebConfig } = props;
  if (!contest || !contestWebConfig) {
    return <LoadingState large />;
  }

  let sidebarItems: ContentWithSidebarItem[] = [
    {
      id: '@',
      titleIcon: 'properties',
      title: 'Overview',
      routeComponent: Route,
      component: ContestOverviewPage,
    },
  ];

  const visibleTabs = contestWebConfig!.visibleTabs;
  if (visibleTabs.indexOf(ContestTab.Announcements) !== -1) {
    sidebarItems = [
      ...sidebarItems,
      {
        id: 'announcements',
        titleIcon: 'notifications',
        title: 'Announcements',
        routeComponent: Route,
        component: ContestAnnouncementsPage,
      },
    ];
  }
  if (visibleTabs.indexOf(ContestTab.Scoreboard) !== -1) {
    sidebarItems = [
      ...sidebarItems,
      {
        id: 'scoreboard',
        titleIcon: 'th',
        title: 'Scoreboard',
        routeComponent: Route,
        component: ContestScoreboardPage,
      },
    ];
  }

  const contentWithSidebarProps: ContentWithSidebarProps = {
    title: 'Contest Menu',
    action: (
      <ButtonLink to="/competition/contests" className="pt-small pt-icon-chevron-left">
        Back
      </ButtonLink>
    ),
    items: sidebarItems,
    contentHeader: (
      <div className="single-contest-routes__header">
        <h2>{contest.name}</h2>
      </div>
    ),
  };

  return (
    <FullPageLayout>
      <ContentWithSidebar {...contentWithSidebarProps} />
    </FullPageLayout>
  );
};

function createSingleContestRoutes() {
  const mapStateToProps = (state: AppState) => ({
    contest: selectContest(state),
    contestWebConfig: selectContestWebConfig(state),
  });
  return withRouter<any>(connect(mapStateToProps)(SingleContestRoutes));
}

export default createSingleContestRoutes();
