import React from 'react'
import { H1, H2, H3 } from '@pubsweet/ui'

import Paragraph from '../../ui/atoms/Paragraph'
import CalloutTextBox from '../../ui/atoms/CalloutTextBox'
import ExternalLink from '../../ui/atoms/ExternalLink'
import List from '../../ui/atoms/List'

const Policies = props => (
  <React.Fragment>
    <H1>Journal Policies</H1>

    <Paragraph>
      eLife is a member of the{' '}
      <ExternalLink href="http://publicationethics.org/" target="_blank">
        Committee on Publication Ethics
      </ExternalLink>{' '}
      (COPE), supports their principles, and follows their{' '}
      <ExternalLink
        href="https://publicationethics.org/resources/flowcharts"
        target="_blank"
      >
        flowcharts
      </ExternalLink>{' '}
      for dealing with potential breaches of publication ethics. eLife also
      follows, as far as possible, the recommendations outlined in the{' '}
      <ExternalLink
        href="http://www.icmje.org/recommendations/"
        target="_blank"
      >
        Uniform Requirements for Manuscripts Submitted to Biomedical Journals
      </ExternalLink>
      , guidelines established by the ICMJE.
    </Paragraph>

    <Paragraph>
      Authors are expected to comply with best practice in research and
      publishing ethics, and with our associated guidelines and policies, for
      example with regard to authorship, competing interests, and data
      availability and reporting standards.
    </Paragraph>

    <Paragraph>
      eLife is a signatory of the{' '}
      <ExternalLink
        href="https://centerforopenscience.org/top/"
        target="_blank"
      >
        Transparency and Openness Promotion (TOP) Guidelines
      </ExternalLink>
      , which is an initiative by the{' '}
      <ExternalLink href="https://centerforopenscience.org" target="_blank">
        Center for Open Science
      </ExternalLink>{' '}
      that promotes shared standards for increasing openness, transparency, and
      reproducibility.
    </Paragraph>

    <H2>Allegations of Misconduct</H2>

    <Paragraph>
      If we receive an allegation of potential research or publication
      misconduct, we will alert those affected and ask for their response. We
      reserve the right to suspend the review process where necessary; to
      publish an expression of concern for published papers where appropriate;
      and/or to ask the relevant employers, or institution, or an appropriate
      regulatory body to investigate. If someone has concerns about potential
      misconduct in a paper published by or under consideration by eLife, s/he
      should contact the journal office,{' '}
      <ExternalLink href="mailto:editorial@elifesciences.org" target="_blank">
        editorial@elifesciences.org
      </ExternalLink>
      , with their message addressed to the Editor-in-Chief, Randy Schekman.
    </Paragraph>

    <H2>Animal and/or Human Experiments</H2>

    <Paragraph>
      Work involving human subjects or animal experimentation is expected to be
      conducted to the highest ethical standards, for example in accordance with
      the{' '}
      <ExternalLink
        href="https://www.wma.net/policies-post/wma-declaration-of-helsinki-ethical-principles-for-medical-research-involving-human-subjects/"
        target="_blank"
      >
        World Medical Association Declaration of Helsinki
      </ExternalLink>{' '}
      for medical research, and with the relevant legislation and guidance for
      animal research listed by{' '}
      <ExternalLink href="http://www.nc3rs.org.uk/" target="_blank">
        NC3Rs
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      For clinical trials, eLife follows the{' '}
      <ExternalLink
        href="http://www.icmje.org/about-icmje/faqs/clinical-trials-registration/"
        target="_blank"
      >
        recommendations of the ICMJE
      </ExternalLink>{' '}
      that all trials must be prospectively registered to be considered for
      publication, and the clinical trial registration number will be requested
      during submission. When reporting randomised clinical trials, authors
      should follow the{' '}
      <ExternalLink href="http://www.consort-statement.org/" target="_blank">
        CONSORT
      </ExternalLink>{' '}
      guidelines and upload a CONSORT{' '}
      <ExternalLink
        href="http://www.consort-statement.org/consort-statement/checklist"
        target="_blank"
      >
        checklist
      </ExternalLink>{' '}
      and{' '}
      <ExternalLink
        href="http://www.consort-statement.org/consort-statement/flow-diagram"
        target="_blank"
      >
        flow diagram
      </ExternalLink>{' '}
      with their submission.
    </Paragraph>

    <Paragraph>
      For human subjects research informed consent must have been obtained (or
      the reason for lack of consent explained). When this work includes
      identifying, or potentially identifying, information, authors must also
      download the{' '}
      <ExternalLink
        href="https://elife-cdn.s3.amazonaws.com/author-guide/elife_Consent_to_Publish_Form.pdf"
        target="_blank"
      >
        Consent Form for Publication in eLife
      </ExternalLink>{' '}
      (PDF), which the individual, parent, or guardian must sign once they have
      read the article and been informed about the terms of the{' '}
      <ExternalLink
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
      >
        Creative Commons Attribution license
      </ExternalLink>{' '}
      (form and guidance based on those developed by PLOS). The signed consent
      form should not be submitted alongside the article, but authors should
      file it with the individual&apos;s case notes and the ethics statement
      should state that consent authorisation for publication has been obtained.
    </Paragraph>

    <H2>Authorship</H2>

    <Paragraph>
      eLife follows the guidelines of the International Committee of Medical
      Journal Editors (ICMJE) for{' '}
      <ExternalLink
        href="http://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html"
        target="_blank"
      >
        authorship and contributorship
      </ExternalLink>{' '}
      and the{' '}
      <ExternalLink
        href="https://docs.google.com/document/d/1aJxrQXYHW5U6By3KEAHrx1Iho6ioeh3ohNsRMwsoGPM/edit"
        target="_target"
      >
        Contributor Role Taxonomy
      </ExternalLink>{' '}
      (CRediT) is used to indicate each author’s contributions.
    </Paragraph>

    <Paragraph>
      Please note that acquisition of funding or the provision of space,
      providing published data or materials, or general supervision of the
      research group alone does not justify authorship.
    </Paragraph>

    <Paragraph>
      Following the recommendations of the ICMJE regarding{' '}
      <ExternalLink
        href="http://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html"
        target="_blank"
      >
        authorship and contributorship
      </ExternalLink>
      , individuals who have contributed materially to the work, but do not
      satisfy the authorship criteria should be listed in the acknowledgements
      section. Authors should seek permission to mention any individuals listed
      in the acknowledgements.
    </Paragraph>

    <H2>Cell Lines</H2>

    <Paragraph>
      Regarding the use of cell lines, authors must report their source, confirm
      the identity has been authenticated, state the authentication method (such
      as STR profiling), and report the mycoplasma contamination testing status.
      Authors should authenticate the identity of their cell lines at least once
      per year, and when starting new work or new cell lines confirm that the
      cell lines are free from mycoplasma and other microorganisms. Authors
      should check the list of{' '}
      <ExternalLink
        href="http://iclac.org/databases/cross-contaminations/"
        target="_blank"
      >
        commonly misidentified cell lines
      </ExternalLink>{' '}
      maintained by the{' '}
      <ExternalLink href="http://iclac.org/" target="_blank">
        International Cell Line Authentication Committee
      </ExternalLink>{' '}
      before submission and justify the use of any cell lines contained therein.
      Cell line authentication services are offered by{' '}
      <ExternalLink
        href="http://www.lgcstandards-atcc.org/Services/Testing%20Services.aspx"
        target="_blank"
      >
        ATCC
      </ExternalLink>
      ,{' '}
      <ExternalLink
        href="https://www.scienceexchange.com/services/cell-line-authentication"
        target="_blank"
      >
        Science Exchange
      </ExternalLink>
      , and others.
    </Paragraph>

    <H2>Competing Interests</H2>

    <Paragraph>
      Authors, reviewers, and editors are all required to declare any competing
      interests that might be perceived to interfere with the objectivity of the
      presentation or handling of the work. For further information on competing
      interests, see the{' '}
      <ExternalLink
        href="http://www.icmje.org/recommendations/browse/roles-and-responsibilities/author-responsibilities--conflicts-of-interest.html"
        target="_blank"
      >
        recommendations of the ICMJE
      </ExternalLink>{' '}
      and the guidance provided by{' '}
      <ExternalLink
        href="http://journals.plos.org/plosmedicine/s/competing-interests"
        target="_blank"
      >
        PLOS
      </ExternalLink>
      .
    </Paragraph>

    <H2 id="copyrightedMaterial">Copyrighted Material</H2>

    <Paragraph>
      Copyrighted material (in full or in part) should not be included in a
      submission to eLife, unless you have explicit permission from the
      copyright holder that it can be reproduced under the terms of a{' '}
      <ExternalLink
        href="http://creativecommons.org/licenses/by/4.0/"
        target="_blank"
      >
        Creative Commons Attribution license
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      Occasionally we have published figures or parts of figures which cannot be
      re-published under a{' '}
      <ExternalLink
        href="http://creativecommons.org/licenses/by/4.0/"
        target="_blank"
      >
        Creative Commons Attribution license
      </ExternalLink>
      . In those instances we ensure the correct attribution is provided within
      the human readable text (HTML and PDF versions of the article) and the
      underlying XML, for machine readability.
    </Paragraph>

    <H2>Availability of Data, Software, and Research Materials</H2>

    <Paragraph>
      Data, methods used in the analysis, and materials used to conduct the
      research must be clearly and precisely documented, and be maximally
      available to any researcher for purposes of reproducing the results or
      replicating the procedure.
    </Paragraph>

    <Paragraph>
      Regardless of whether authors use original data or are reusing data
      available from public repositories, they must provide program code,
      scripts for statistical packages, and other documentation sufficient to
      allow an informed researcher to precisely reproduce all published results.
    </Paragraph>

    <Paragraph>
      In rare cases, despite authors’ best efforts, certain data or materials
      cannot be shared for legal or ethical reasons. In such cases, authors must
      inform the editors at the time of submission. This will be taken into
      account during the review process. Authors are encouraged to anticipate
      data and material sharing at the beginning of their projects to provide
      for these circumstances. Editors may grant exceptions to data and material
      access requirements provided that authors:
    </Paragraph>

    <List.Unordered>
      <li>
        explain the restrictions on the dataset or materials and how they
        preclude public access;
      </li>
      <li>
        provide a public description of the steps others should follow to
        request access to the data or materials;
      </li>
      <li>
        provide software and other documentation that will precisely reproduce
        all published results;
      </li>
      <li>
        provide access to all data and materials for which the constraints do
        not apply.
      </li>
    </List.Unordered>

    <H3>Data Availability</H3>

    <Paragraph>
      To maintain high standards of research reproducibility, and to promote the
      reuse of new findings, eLife requires all datasets associated with an
      article to be made freely and widely available (unless there are strong
      reasons to restrict access, for example in the case of human subjects
      data), in the most useful formats, and according to the relevant reporting
      standards.
    </Paragraph>

    <Paragraph>
      Wherever possible, authors should make major datasets available using
      domain-specific public archives (for example,{' '}
      <ExternalLink href="http://www.ncbi.nlm.nih.gov/genbank/" target="_blank">
        GenBank
      </ExternalLink>
      ,{' '}
      <ExternalLink href="http://www.rcsb.org/pdb/home/home.do" target="_blank">
        Protein Data Bank
      </ExternalLink>
      , and{' '}
      <ExternalLink href="http://clinicaltrials.gov/" target="_blank">
        ClinicalTrials.gov
      </ExternalLink>
      ), or generic databases (for example,{' '}
      <ExternalLink href="http://datadryad.org/" target="_blank">
        Dryad
      </ExternalLink>
      ,{' '}
      <ExternalLink href="http://dataverse.org/" target="_blank">
        Dataverse
      </ExternalLink>{' '}
      or{' '}
      <ExternalLink href="http://osf.io/" target="_blank">
        the Open Science Framework
      </ExternalLink>
      ) where a domain specific archive does not exist. A comprehensive
      catalogue of databases has been compiled by the{' '}
      <ExternalLink href="https://fairsharing.org/" target="_blank">
        FAIRsharing information resource
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>Authors using original data must:</Paragraph>

    <List.Unordered>
      <li>
        make the data available at a trusted digital repository (however, if all
        data required to reproduce the reported analyses appears in the article
        text, tables, and figures then it does not also need to be posted to a
        repository);
      </li>
      <li>
        include all variables, treatment conditions, and observations described
        in the manuscript;
      </li>
      <li>
        provide a full account of the procedures used to collect, pre-process,
        clean, or generate the data;
      </li>
      <li>
        provide research materials and description of procedures necessary to
        conduct an independent replication of the research.
      </li>
    </List.Unordered>

    <Paragraph>
      Trusted repositories adhere to policies that make data discoverable,
      accessible, usable, and preserved for the long term. Trusted repositories
      also assign unique and persistent identifiers. Author-maintained websites
      are not compliant with this requirement.
    </Paragraph>

    <Paragraph>
      Authors using unpublished datasets must abide by the relevant community
      guidelines for the use and acknowledgment of those data resources
      (including the{' '}
      <ExternalLink
        href="http://www.genome.gov/pages/research/wellcomereport0303.pdf"
        target="_blank"
      >
        Fort Lauderdale
      </ExternalLink>{' '}
      and{' '}
      <ExternalLink
        href="http://www.nature.com/nature/journal/v461/n7261/full/461168a.html"
        target="_blank"
      >
        Toronto
      </ExternalLink>{' '}
      agreements in the case of genomic datasets), obtaining permission where
      required (which should be stated in the cover letter), and citing the
      appropriate laboratory, website, and accession numbers.
    </Paragraph>

    <H3>Software</H3>

    <Paragraph>
      Authors are required to follow the guidelines developed by{' '}
      <ExternalLink
        href="http://journals.plos.org/ploscompbiol/s/materials-and-software-sharing"
        target="_blank"
      >
        PLOS
      </ExternalLink>{' '}
      if new software or a new algorithm is central to the submission; for
      example, authors must confirm that software conforms to the{' '}
      <ExternalLink href="http://opensource.org/docs/osd" target="_blank">
        Open Source Definition
      </ExternalLink>{' '}
      and is deposited in an appropriate public repository. To ensure that
      software can be reproduced without restrictions and that authors are
      properly acknowledged for their work, authors should license their code
      using an{' '}
      <ExternalLink href="https://opensource.org/licenses" target="_blank">
        open source license
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      Authors are encouraged to use version control services such as GitHub,
      GitLab, and SourceForge. eLife maintains a{' '}
      <ExternalLink
        href="http://github.com/elifesciences-publications/"
        target="_blank"
      >
        GitHub account
      </ExternalLink>{' '}
      to archive code accompanying eLife publications that has been deposited on
      GitHub or another version control service. Binary files (&quot;non-text
      files&quot;, such as images, zip files, or program data) should be kept to
      a minimum and, if possible, they should not exceed 50MB. Please try to
      avoid files larger than 100MB as they will require special handling.
    </Paragraph>

    <H3>Research Materials and RRIDs</H3>

    <Paragraph>
      In accordance with the principles established in{' '}
      <ExternalLink
        href="http://www.plantphysiol.org/content/132/1/19"
        target="_blank"
      >
        ‘Sharing Publication-Related Data and Materials’
      </ExternalLink>{' '}
      (doi:10.1104/pp.900068), a condition of publication is that authors must
      make the materials and resources described in their article promptly
      available upon reasonable request from academic researchers.
    </Paragraph>

    <Paragraph>
      All biological reagents must be made available to qualified investigators
      upon reasonable request. We strongly encourage authors to deposit copies
      of their plasmids as DNA or bacterial stocks with repositories such as{' '}
      <ExternalLink href="http://www.addgene.org/" target="_blank">
        Addgene
      </ExternalLink>{' '}
      or{' '}
      <ExternalLink
        href="http://plasmid.med.harvard.edu/PLASMID/"
        target="_blank"
      >
        PlasmID
      </ExternalLink>
      . Other established repositories for biological materials include the{' '}
      <ExternalLink href="http://www.atcc.org/" target="_blank">
        American Type Culture Collection
      </ExternalLink>
      ,{' '}
      <ExternalLink href="https://abrc.osu.edu/" target="_blank">
        Arabidopsis Biological Resource Center
      </ExternalLink>
      ,{' '}
      <ExternalLink href="http://flystocks.bio.indiana.edu/" target="_blank">
        Bloomington Drosophila Stock Center
      </ExternalLink>
      ,{' '}
      <ExternalLink href="https://cgc.umn.edu/" target="_blank">
        Caenorhabditis Genetics Center
      </ExternalLink>
      , the{' '}
      <ExternalLink href="http://www.eucomm.org/" target="_blank">
        European Conditional Mouse Mutagenesis Program
      </ExternalLink>
      , the{' '}
      <ExternalLink href="https://www.infrafrontier.eu/" target="_blank">
        European Mouse Mutant Archive
      </ExternalLink>
      , the{' '}
      <ExternalLink href="http://www.komp.org/" target="_blank">
        Knockout Mouse Project
      </ExternalLink>
      , the{' '}
      <ExternalLink href="http://www.jax.org/" target="_blank">
        Jackson Laboratory
      </ExternalLink>
      , the{' '}
      <ExternalLink href="http://www.mmrrc.org/" target="_blank">
        Mutant Mouse Regional Resource Centers
      </ExternalLink>
      , and{' '}
      <ExternalLink
        href="http://www.brc.riken.go.jp/inf/en/DB/"
        target="_blank"
      >
        RIKEN Bioresource Centre
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      Authors should include a statement at the end of the Materials and methods
      to provide information about the availability of the materials and
      resources described in the article, including any restrictions in
      availability or use.
    </Paragraph>

    <Paragraph>
      To help promote the identification, discovery, and reuse of key research
      resources, we encourage you to include Research Resource Identifiers
      (RRIDs) within the Materials and Methods section to identify the model
      organisms, cells lines, antibodies, and tools (such as software or
      databases) you have used (e.g.{' '}
      <ExternalLink
        href="https://scicrunch.org/resolver/RRID:AB_2178887"
        target="_blank"
      >
        RRID:AB_2178887
      </ExternalLink>{' '}
      for an antibody,{' '}
      <ExternalLink
        href="https://scicrunch.org/resolver/RRID:MGI:3840442"
        target="_blank"
      >
        RRID:MGI:3840442
      </ExternalLink>{' '}
      for an organism,{' '}
      <ExternalLink
        href="https://scicrunch.org/resolver/RRID:CVCL_1H60"
        target="_blank"
      >
        RRID:CVCL_1H60
      </ExternalLink>{' '}
      for a cell line, and{' '}
      <ExternalLink
        href="https://scicrunch.org/resolver/RRID:SCR_007358"
        target="_blank"
      >
        RRID:SCR_007358
      </ExternalLink>{' '}
      for a tool). The{' '}
      <ExternalLink href="https://scicrunch.org/resources" target="_blank">
        RRID Portal
      </ExternalLink>{' '}
      lists existing RRIDs, and instructions for creating a new one if an RRID
      matching the resource does not already exist.
    </Paragraph>

    <H2>Dual Use</H2>

    <Paragraph>
      Regarding the oversight of dual use life-sciences research, we follow the
      recommendations formulated by the{' '}
      <ExternalLink
        href="https://osp.od.nih.gov/biotechnology/dual-use-research-of-concern/"
        target="_blank"
      >
        National Science Advisory Board for Biosecurity
      </ExternalLink>{' '}
      (NSABB). If there are any concerns about dual use life-sciences research
      during submission or review, please bring them to the attention of the
      journal’s editors.
    </Paragraph>

    <H2>Editorial Independence and Integrity</H2>

    <Paragraph>
      eLife follows the guidance of the{' '}
      <ExternalLink
        href="http://www.wame.org/policy-statements#Relationship between Editors and Owners"
        target="_blank"
      >
        World Association of Medical Editors
      </ExternalLink>{' '}
      and the{' '}
      <ExternalLink
        href="https://www.councilscienceeditors.org/"
        target="_blank"
      >
        Council of Science Editors
      </ExternalLink>{' '}
      regarding editorial independence. The editors of <em>eLife,</em> under the
      leadership of the{' '}
      <ExternalLink
        href="http://elifesciences.org/about#leadership"
        target="_blank"
      >
        Editor-in-Chief
      </ExternalLink>
      , have sole responsibility, authority, and accountability for the
      editorial content of the journal. Submissions are judged on their own
      merits, regardless of funding, author affiliations, or author
      relationships with eLife.
    </Paragraph>

    <Paragraph>
      The funders and sponsors of eLife have no role in the selection,
      evaluation, or editing of the content. The content published in eLife does
      not represent the opinions of the Howard Hughes Medical Institute, the Max
      Planck Society, the Wellcome Trust or the Knut and Alice Wallenberg
      Foundation.
    </Paragraph>

    <Paragraph>
      Information provided during the submission and review process is strictly
      confidential.
    </Paragraph>

    <H2>Image Acquisition and Presentation</H2>

    <Paragraph>
      Image files must not be manipulated or adjusted in any way that could lead
      to misinterpretation of the information present in the original image. See{' '}
      <ExternalLink
        href="http://jcb.rupress.org/content/166/1/11.full"
        target="_blank"
      >
        &apos;What&apos;s in a picture? The temptation of image
        manipulation&apos;
      </ExternalLink>{' '}
      (Rossner and Yamada 2004, Journal of Cell Biology, 166:11) and also{' '}
      <ExternalLink
        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4114110/"
        target="_blank"
      >
        &apos;Avoiding Twisted Pixels: Ethical Guidelines for the Appropriate
        Use and Manipulation of Scientific Digital Images&apos;
      </ExternalLink>{' '}
      (Cromey 2010, Sci Eng Ethics, 16-639-667) for valuable guidance on
      acceptable practice and examples of inappropriate manipulation. Please
      take note of the following guidance in particular:
    </Paragraph>

    <List.Unordered>
      <li>
        Minimal processing of images (for example, changing brightness and
        contrast) is appropriate only where it is applied equally across the
        whole image and is equally applied to controls.
      </li>
      <li>Contrast should not be adjusted to obscure data.</li>
      <li>
        Processing an image to emphasise one region at the expense of others, or
        to emphasise experimental data relative to the control, is not
        permitted.
      </li>
      <li>
        Combining images that should otherwise be presented separately may
        misrepresent the original data. If different images do need to be
        combined, then this should be clearly indicated in the image (for
        example, including dividing lines in gels) and described in the Figure
        legend.
      </li>
    </List.Unordered>

    <Paragraph>
      Please note that authors should provide information within their
      submission about the tools and techniques used when acquiring and
      preparing images. For example, submissions including microscopy images or
      autoradiograms should include information about the exposure times, the
      acquisition parameters, and whether the image received any
      post-acquisition treatment (for example stating if the format or scales
      were modified).
    </Paragraph>

    <Paragraph>
      Images may be subject to screening prior to acceptance and we may need to
      request the original, unprocessed figure files/raw data for further
      review.
    </Paragraph>

    <H2>Licensing</H2>

    <Paragraph>
      Because articles published by eLife are licensed under a{' '}
      <ExternalLink
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
      >
        Creative Commons Attribution license
      </ExternalLink>
      , others are free to copy, distribute, and reuse them (in part or in
      full), without needing to seek permission, as long as the author and
      original source are properly cited.
    </Paragraph>

    <H2>Media Policy</H2>

    <Paragraph>
      eLife’s media policy is designed to encourage high-quality, informed and
      widespread discussion of new research – before and after publication.
    </Paragraph>

    <H3>Presenting and discussing work prior to publication</H3>

    <Paragraph>
      Prior to publication, authors are encouraged to present their findings to
      their peers, including at meetings and conferences; to deposit a copy of
      their manuscript with a preprint server (or other open repository or
      website); and to blog about their findings. None of these activities will
      affect consideration of a manuscript for publication in eLife. Where there
      is media interest in a paper that has been accepted by eLife, and likely
      media coverage in advance of publication, we encourage the authors to take
      advantage of the eLife option to publish their manuscript within a few
      days of acceptance (our “publish on accept” service), so that readers of
      any (potential) early coverage will be able to access the full paper as
      soon as possible.
    </Paragraph>

    <Paragraph>
      Authors are welcome to speak to the media about their work at any time
      prior to publication and may share advance copies of their manuscript with
      journalists as they prefer. They may also wish to ask their institutional
      press officers to help with advance promotion, once the manuscript is
      accepted. However, eLife encourages press officers to pitch studies widely
      at the time of publication only, rather than in advance, so that as many
      journalists as possible receive the story, and access to the full,
      peer-reviewed paper, at the same time.
    </Paragraph>

    <H3>Our policy not to embargo eLife papers</H3>

    <Paragraph>
      Because authors are completely free to release their content ahead of
      publication and to talk with the media at any stage, we do not release
      content under embargo, except under exceptional circumstances. This means
      that journalists can write and publish articles about a study in advance
      of publication without breaking an embargo. However, we strongly recommend
      that their stories are published at the time of or after publication, so
      that readers have access to the full, peer-reviewed paper.
    </Paragraph>

    <H3>Making content widely accessible</H3>

    <Paragraph>
      Many eLife papers are published with a plain-language summary (called an
      eLife digest) to explain the background and central findings of the work
      to a broad readership. We also publish the most substantive parts of the
      decision letter that is sent to authors after peer review (and which is
      based on the referees&apos; reports on the paper), along with the
      authors&apos; response to this letter, to provide greater context for the
      work. Where eLife considers papers to be of potential interest to a broad
      audience, these will also be promoted widely to the media and to
      interested readers either on the day of publication or post publication.
    </Paragraph>

    <Paragraph>
      More information for institutional press officers and journalists is
      available at{' '}
      <ExternalLink
        href="https://elifesciences.org/for-the-press"
        target="_blank"
      >
        https://elifesciences.org/for-the-press
      </ExternalLink>
      .
    </Paragraph>

    <H2>Nomenclature</H2>

    <Paragraph>
      Correct and established nomenclature should be used throughout the
      article, such as for gene names, species names and SI units. The
      appropriate nomenclature databases for correct gene names and symbols
      should be consulted. Helpful reference points for approved nomenclature
      include{' '}
      <ExternalLink href="http://flybase.org/" target="_blank">
        Genetic nomenclature for <em>Drosophila melanogaster</em>
      </ExternalLink>
      ;{' '}
      <ExternalLink
        href="http://www.wormbase.org/about/userguide/nomenclature"
        target="_blank"
      >
        Genetic Nomenclature for <em>Caenorhabditis elegans</em>
      </ExternalLink>
      ;{' '}
      <ExternalLink
        href="http://www.maizegdb.org/maize_nomenclature.php"
        target="_blank"
      >
        A Standard For Maize Genetics Nomenclature
      </ExternalLink>
      ;{' '}
      <ExternalLink
        href="http://www.arabidopsis.org/portals/nomenclature/guidelines.jsp"
        target="_blank"
      >
        Arabidopsis Nomenclature
      </ExternalLink>
      ;{' '}
      <ExternalLink
        href="http://www.genenames.org/about/guidelines"
        target="_blank"
      >
        Guidelines for Human Gene Nomenclature
      </ExternalLink>
      ;{' '}
      <ExternalLink
        href="http://www.informatics.jax.org/mgihome/nomen/gene.shtml"
        target="_blank"
      >
        Rules for Nomenclature of Genes, Genetic Markers, Alleles, and Mutations
        in Mouse and Rat
      </ExternalLink>
      ; the{' '}
      <ExternalLink
        href="http://www.xenbase.org/gene/static/geneNomenclature.jsp"
        target="_blank"
      >
        Xenopus Gene Nomenclature Guidelines
      </ExternalLink>
      ; and the{' '}
      <ExternalLink
        href="https://wiki.zfin.org/display/general/ZFIN+Zebrafish+Nomenclature+Guidelines"
        target="_blank"
      >
        Zebrafish Nomenclature Guidelines
      </ExternalLink>
      .
    </Paragraph>

    <Paragraph>
      Note that in the specific case of a study that reports a new taxon name,
      authors are required to follow the guidelines developed by PLOS for{' '}
      <ExternalLink
        href="http://journals.plos.org/plosone/s/submission-guidelines"
        target="_blank"
      >
        zoological and botanical names
      </ExternalLink>
      .
    </Paragraph>

    <H2>Preregistration</H2>

    <Paragraph>
      Preregistration of studies involves registering the study design,
      variables, and treatment conditions prior to conducting the research. For
      clinical trials, eLife follows the{' '}
      <ExternalLink
        href="http://www.icmje.org/about-icmje/faqs/clinical-trials-registration/"
        target="_blank"
      >
        recommendations of the ICMJE
      </ExternalLink>{' '}
      that all trials must be prospectively registered to be considered for
      publication, and the clinical trial registration number will be requested
      during submission.
    </Paragraph>

    <Paragraph>
      eLife is using the Registered Reports approach as part of the{' '}
      <ExternalLink
        href="https://elifesciences.org/collections/reproducibility-project-cancer-biology"
        target="_blank"
      >
        Reproducibility Project: Cancer Biology
      </ExternalLink>
      . For other submissions, authors are encouraged to consider whether
      preregistration would be appropriate, noting if they have done so within
      their cover letter.
    </Paragraph>

    <H2>Reporting Standards</H2>

    <Paragraph>
      To facilitate the interpretation and replication of experiments, authors
      are required to complete eLife&apos;s{' '}
      <ExternalLink href="/html/transparent_reporting.pdf">
        Transparent Reporting Form
      </ExternalLink>{' '}
      before peer review. Authors are also required to adhere to
      well-established reporting standards, such as for microarray experiments,
      clinical trials, and so on.
    </Paragraph>

    <Paragraph>
      Authors are required to cite the specific guidelines that they have
      followed in the reporting of their work, and we encourage authors to
      upload any relevant reporting checklists or documents as a Reporting
      Standards Document to indicate the use of appropriate reporting guidelines
      for health-related research (see{' '}
      <ExternalLink href="http://www.equator-network.org/" target="_blank">
        EQUATOR Network
      </ExternalLink>
      ), life science research (see the{' '}
      <ExternalLink href="https://biosharing.org/" target="_blank">
        BioSharing Information Resource
      </ExternalLink>
      ), or the{' '}
      <ExternalLink href="http://www.plosbiology.org/article/info:doi/10.1371/journal.pbio.1000412">
        ARRIVE guidelines
      </ExternalLink>{' '}
      for reporting work involving animal research.
    </Paragraph>

    <Paragraph>
      In the specific case of a study containing an X-ray crystal structure,
      authors are required to upload a validation summary report from one of the{' '}
      <ExternalLink href="http://www.wwpdb.org/" target="_blank">
        Worldwide Protein Data Bank
      </ExternalLink>{' '}
      organisations as a Related Manuscript File.
    </Paragraph>

    <Paragraph>
      In the specific case of a study containing functional enzyme data, we
      encourage authors to deposit data to{' '}
      <ExternalLink
        href="https://www.beilstein-strenda-db.org/strenda/"
        target="_blank"
      >
        STRENDA DB
      </ExternalLink>{' '}
      and to upload the “Experimental data fact sheet” that accompanies the
      deposition as a Reporting Standards Document in the submission to eLife.
    </Paragraph>

    <CalloutTextBox>
      <Paragraph>
        <strong>Research Conducted by eLife.</strong> As a way of improving our
        services, we periodically undertake research and surveys relating to
        eLife&apos;s submission and review process. Where appropriate we will
        share our findings so that others can benefit. Participation does not
        affect the decision on manuscripts under consideration, or our policies
        relating to the confidentiality of the review process. If you would like
        to opt out of eLife&apos;s research and/or surveys, please{' '}
        <ExternalLink href="mailto:editorial@elifesciences.org" target="_blank">
          contact the journal office
        </ExternalLink>
        .
      </Paragraph>
    </CalloutTextBox>
  </React.Fragment>
)

export default Policies
