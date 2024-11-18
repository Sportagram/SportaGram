import rootApi from './rootApi';  // 기존의 rootApi 파일 경로에 맞게 수정

const urlbase = '/api/teams'; // Team 관련 기본 URL

const teamApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        // 모든 팀 데이터를 가져오는 쿼리
        getTeamList: builder.query({
            query: () => ({
                url: urlbase,
                method: 'get',
            }),
        }),
        // 팀 정보를 추가하는 Mutation
        addTeam: builder.mutation({
            query: (newTeam) => ({
                url: urlbase,
                method: 'post',
                body: newTeam, // 새로 추가할 팀 데이터 (예: 팀 이름, 팀 ID 등)
            }),
        }),
        // 특정 팀 데이터를 수정하는 Mutation
        updateTeam: builder.mutation({
            query: ({ teamID, ...updateData }) => ({
                url: `${urlbase}/${teamID}`,
                method: 'put',
                body: updateData,
            }),
        }),
        // 특정 팀 데이터를 삭제하는 Mutation
        deleteTeam: builder.mutation({
            query: (teamID) => ({
                url: `${urlbase}/${teamID}`,
                method: 'delete',
            }),
        }),
    }),
});

export const {
    useGetTeamListQuery,       // 팀 데이터를 가져오는 hook
    useAddTeamMutation,        // 팀 데이터를 추가하는 hook
    useUpdateTeamMutation,     // 팀 데이터를 수정하는 hook
    useDeleteTeamMutation,     // 팀 데이터를 삭제하는 hook
} = teamApi;
