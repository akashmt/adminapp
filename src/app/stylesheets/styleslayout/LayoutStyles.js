import React from 'react'
import { WorkspaceGrid } from './workspace/WorkspaceGrid'
import { AppNavPanelGrid, 
				 AppAdminNavLogo, AppAdminNavigation } from './workspace/appnavpanel/AppNavPanel'
import { AppHeaderGrid, AppHeader, 
				 AppTriggerAdminPanel, AppHeaderBrand,
				 AppHeaderNav, AppUserNav } from './workspace/appheader/AppHeader'
import { AppsHeaderGrid, AppsHeader } from './workspace/appsheader/AppsHeader'
import { AgencyHeaderArea, AgencySwitcher } from './workspace/appsheader/AgencyHeaderArea'
import { ModuleHeaderArea, AppsModuleName, AppsModuleSwitcher } from './workspace/appsheader/ModuleHeaderArea'
import { BrandHeaderArea } from './workspace/appsheader/BrandHeaderArea'
import { ModuleAreaGrid, ModuleArea } from './workspace/module/ModuleArea'
import { AsideAppsBrand, AsideMenuGroup } from './workspace/module/ModuleAside'
import { ModuleBreadcrumb, ModuleHeaderName } from './workspace/module/ModuleHeader'
import { Dashboard } from './workspace/dashboard/Dashboard'
import { ModuleMain } from './workspace/module/ModuleMain'
import { WorkflowAreaGrid, WorkflowArea } from './workspace/workflow/WorkflowArea'
import { WorkflowAside } from './workspace/workflow/WorkflowAside'
import { WorkflowMain } from './workspace/workflow/WorkflowMain'

function LayoutStyles(){
  return (
		<React.Fragment>
			<WorkspaceGrid/>
				<AppNavPanelGrid/>
					<AppAdminNavLogo/>
					<AppAdminNavigation/>
				<AppHeaderGrid/>
					<AppHeader/>
					<AppTriggerAdminPanel/>
					<AppHeaderBrand/>
					<AppHeaderNav/>
					<AppUserNav/>
				<AppsHeaderGrid/>
					<AppsHeader/>
					<AgencyHeaderArea/>
						<AgencySwitcher/>
          		<BrandHeaderArea/>
				<ModuleHeaderArea/>
					<AppsModuleName/>
					<AppsModuleSwitcher/>
			<ModuleAreaGrid/>
				<ModuleArea/>
				<AsideAppsBrand/>
				<AsideMenuGroup/>
				<ModuleBreadcrumb/>
				<ModuleHeaderName/>
				<Dashboard/>
				<ModuleMain/>
			<WorkflowAreaGrid/>
		        <WorkflowArea/>
						<WorkflowAside/>
						<WorkflowMain/>
		</React.Fragment>
	)
}

export default LayoutStyles