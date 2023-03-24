<#macro form>
  <form method="POST" class="form-horizontal">
    <#nested>
  </form>
</#macro>

<#macro multipartForm>
  <form method="POST" class="form-horizontal" enctype="multipart/form-data">
    <#nested>
  </form>
</#macro>

<#macro text name label form={} required=false disabled=false autofocus=false pattern="" title="" help="" addon="">
  <div class="form-group">
    <label class="control-label col-md-3" for="${name}">${label}</label>
    <div class="col-md-9">
      <#if addon?has_content>
        <div class="input-group">
      </#if>
          <input
            type="text" id="${name}" name="${name}" class="form-control"
            <#if form[name]??>value="${form[name]}"</#if>
            <#if required>required</#if>
            <#if disabled>disabled</#if>
            <#if autofocus>autofocus</#if>
            <#if pattern?has_content>pattern="${pattern}"</#if>
            <#if title?has_content>title="${title}"</#if>
          >
          <#if help?has_content>
            <span class="help-block">${help}</span>
          </#if>
      <#if addon?has_content>
          <div class="input-group-addon">${addon}</div>
        </div>
      </#if>
    </div>
  </div>
</#macro>

<#macro password name label required=false>
  <div class="form-group">
    <label class="control-label col-md-3" for="${name}">${label}</label>
    <div class="col-md-9">
      <input type="password" id="${name}" name="${name}" class="form-control" ${required?then("required", "")}>
    </div>
  </div>
</#macro>

<#macro select name label options form={} disabled=false help="">
  <div class="form-group">
    <label class="control-label col-md-3" for="${name}">${label}</label>
    <div class="col-md-9">
      <select id="${name}" name="${name}" class="form-control" <#if disabled>disabled</#if>/>
        <#list options as k, v>
          <option value="${k}" ${(k == form[name]!"")?then("selected", "")}>${v}</option>
        </#list>
      </select>
      <#if help?has_content>
        <span class="help-block">${help}</span>
      </#if>
    </div>
  </div>
</#macro>

<#macro textarea name label form={}>
  <div class="form-group">
    <label class="control-label col-md-3" for="${name}">${label}</label>
    <div class="col-md-9">
      <textarea rows="5" id="${name}" name="${name}" class="form-control">${form[name]!""}</textarea>
    </div>
  </div>
</#macro>

<#macro file name label form={} required=false>
  <div class="form-group">
    <label class="control-label col-md-3" for="${name}">${label}</label>
    <div class="col-md-9">
      <input type="file" id="${name}" name="${name}" class="form-control">
    </div>
  </div>
</#macro>

<#macro submit>
  <div class="form-group">
    <div class="col-md-9 col-md-offset-3">
      <button type="submit" class="btn btn-primary">
        <#nested>
      </button>
    </div>
  </div>
</#macro>
