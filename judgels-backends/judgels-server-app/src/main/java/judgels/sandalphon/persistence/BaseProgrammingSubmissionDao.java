package judgels.sandalphon.persistence;

import java.util.Map;
import java.util.Set;
import judgels.persistence.JudgelsDao;
import judgels.persistence.QueryBuilder;

public interface BaseProgrammingSubmissionDao<M extends AbstractProgrammingSubmissionModel> extends JudgelsDao<M> {
    M createSubmissionModel();

    BaseProgrammingSubmissionQueryBuilder<M> select();
    Map<String, Long> selectCounts(String containerJid, String userJid, Set<String> problemJids);

    interface BaseProgrammingSubmissionQueryBuilder<M extends AbstractProgrammingSubmissionModel> extends QueryBuilder<M> {
        BaseProgrammingSubmissionQueryBuilder<M> whereContainerIs(String containerJid);
        BaseProgrammingSubmissionQueryBuilder<M> whereAuthorIs(String userJid);
        BaseProgrammingSubmissionQueryBuilder<M> whereProblemIs(String problemJid);
        BaseProgrammingSubmissionQueryBuilder<M> whereLastSubmissionIs(long submissionId);
    }
}
