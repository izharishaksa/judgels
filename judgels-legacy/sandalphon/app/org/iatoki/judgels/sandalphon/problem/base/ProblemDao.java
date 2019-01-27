package org.iatoki.judgels.sandalphon.problem.base;

import com.google.inject.ImplementedBy;
import judgels.persistence.JudgelsDao;

import java.util.List;

@ImplementedBy(ProblemHibernateDao.class)
public interface ProblemDao extends JudgelsDao<ProblemModel> {

    List<String> getJidsByAuthorJid(String authorJid);

    ProblemModel findBySlug(String slug);

    boolean existsBySlug(String slug);
}
